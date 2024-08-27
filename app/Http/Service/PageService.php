<?php

namespace App\Services;

use App\Models\Page;
use Illuminate\Support\Str;

class PageService
{
    public function createPage(array $data)
    {
        $slug = $data['slug'];

        // Check if a page with the same slug already exists
        if (Page::where('slug', $slug)->exists()) {
            return ['success' => false, 'message' => 'A page with this slug already exists.'];
        }

        $page = new Page();
        $page->id = (string) Str::uuid();

        if (isset($data['attachment'])) {
            $attachmentFile = $data['attachment'];
            $imageName = time().'.'.$attachmentFile->getClientOriginalExtension();
            $attachmentPath = "attachments";
            $attachmentFile->move(public_path($attachmentPath), $imageName);
            $page->attachment_name = $imageName;
            $page->attachment_path = $attachmentPath;
            $page->attachment_mime = $attachmentFile->getClientMimeType();
            $page->attachment_url = url($attachmentPath.'/' . $imageName);
        }

        $page->title = $data['title'];
        $page->slug = $data['slug'];
        $page->order = $data['order'] ?? 0;
        $page->subtitle = $data['shortDescription'];
        $page->body = $data['content'];
        $page->summary = $data['summary'] ?? '';
        $page->button_text = $data['button_text'] ?? '';
        $page->button_link = $data['button_link'] ?? '';
        $page->published = $data['published'] ?? false;

        $page->save();

        return ['success' => true, 'message' => 'Page created successfully.'];
    }
}
