<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\PageRequest\StorePageRequest;
use App\Models\Page;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Redirect;

class PageController extends Controller
{

    
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $pages = Page::all();

        return Inertia::render('Admin/Pages/Index', [
        'pages' => $pages,
    ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        //

        // return $request;

    }

    /**
     * Store a newly created resource in storage.
     */

    public function store(StorePageRequest $request)
    {
        $validatedData = $request->validated();
        $slug = $validatedData['slug'];
        if (Page::where('slug', $slug)->exists()) {
             return redirect()->back()->with('error', 'A page  already exists.');
        }

        $page = new Page();
        $page->id = (string) Str::uuid();
        
        if ($request->hasFile('attachment')) {
            $attachmentFile = $request->file('attachment');
            $imageName = time().'.'.$attachmentFile->getClientOriginalExtension();
            $attachmentPath =  "attachments";
            $attachmentFile->move(public_path($attachmentPath), $imageName);
            $page->attachment_name = $imageName;
            $page->attachment_path = $attachmentPath;
            $page->attachment_mime = $attachmentFile->getClientMimeType();
            $page->attachment_url = url($attachmentPath.'/' . $imageName); // Optional: Store the public URL of the image
        }
        $page->title = $validatedData['title'];
        $page->slug = $validatedData['slug'];
        $page->order = $validatedData['order'] ?? 0;
        $page->subtitle = $validatedData['shortDescription'];
        $page->body = $validatedData['content'];
        $page->summary = $validatedData['summary']?? '';
        $page->button_text = $validatedData['button_text']?? '';
        $page->button_link = $validatedData['button_link']?? '';
        $page->published = $validatedData['published'] ?? false;

        $page->save();

        return Redirect::route('pages.index')->with('message', 'Page created successfully.');
        
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
