<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('gallery_attachments', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('attachment_url',1024)->nullable();
            $table->string('attachment_name', 255)->nullable(); // File name
            $table->string('attachment_mime', 25)->nullable(); //Image/jpeg
            $table->boolean('published')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gallery_attachments');
    }
};
