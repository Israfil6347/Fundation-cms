<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
      protected $fillable = [
        'title', 'slug', 'order', 'subtitle', 'body', 'summary',
        'button_text', 'button_link', 'attachment_url', 'attachment_path',
        'attachment_name', 'attachment_mime', 'published',
    ];
}
