<?php

use App\Http\Controllers\About\ActivitiesController;
use App\Http\Controllers\About\ChairmanController;
use App\Http\Controllers\About\CommitteeController;
use App\Http\Controllers\About\HistoryController;
use App\Http\Controllers\About\MissionController;
use App\Http\Controllers\About\StructureAndPartnersController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\Admin\AccountSettingController;
use App\Http\Controllers\Admin\AdminNoticeController;
use App\Http\Controllers\Admin\AdminPublicationController;
use App\Http\Controllers\Admin\DepositController;
use App\Http\Controllers\Admin\DownloadController;
use App\Http\Controllers\Admin\GalleryImageController;
use App\Http\Controllers\Admin\HomeController;
use App\Http\Controllers\Admin\JobCircularController;
use App\Http\Controllers\Admin\LeaderController;
use App\Http\Controllers\Admin\PageController;
use App\Http\Controllers\Admin\ServiceController;
use App\Http\Controllers\Admin\SettingController;
use App\Http\Controllers\Admin\SliderImageController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DonateController;
use App\Http\Controllers\FaqController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\NoticeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PublicationController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/




Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name("home");



Route::get('/publication', [PublicationController::class, 'index'])->name('publication');

Route::get('/notices', [NoticeController::class, 'index'])->name('notices');

Route::get('/gallery', [GalleryController::class, 'index'])->name('gallery');

Route::get('/donate', [DonateController::class, 'index'])->name('donate');

Route::get('/faq', [FaqController::class, 'index'])->name('faq');

Route::get('/contact', [ContactController::class, 'index'])->name('contact');

Route::get('/about', [AboutController::class, 'index'])->name('about');

Route::get('/about/our-history', [HistoryController::class, 'index'])->name('about/our-history');

Route::get('/about/mission-vision', [MissionController::class, 'index'])->name('about/mission-vision');

Route::get('/about/structure-and-partners', [StructureAndPartnersController::class, 'index'])->name('about/structure-and-partners');

Route::get('/about/activities', [ActivitiesController::class, 'index'])->name('about/activities');

Route::get('/about/chairman-message', [ChairmanController::class, 'index'])->name('about/chairman-message');

Route::get('/about/committee', [CommitteeController::class, 'index'])->name('about/committee');




Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

});

Route::middleware('auth')->group(function () {
    
    Route::get("/auth/home", [HomeController::class, 'index'])->name("auth.home");

    // Route::get("/auth/pages", [PageController::class, 'index'])->name("auth/pages");
    // Route::resource('/auth/pages', PageController::class);

    // Route::resource('auth/pages', PageController::class)->names('admin.pages');
    Route::get("/auth/pages", [PageController::class, 'index'])->name("pages.index");
    Route::post("/auth/pages", [PageController::class, 'store'])->name("pages.store");
    Route::get("/auth/our-services", [ServiceController::class, 'index'])->name("auth.our-services");
    Route::get("/auth/deposit-products", [DepositController::class, 'index'])->name("auth.deposit-products");
    Route::get("/auth/publication", [AdminPublicationController::class, 'index'])->name("auth.publication");
    Route::get("/auth/downloads", [DownloadController::class, 'index'])->name("auth.downloads");
    Route::get("/auth/notices", [AdminNoticeController::class, 'index'])->name("auth.notices");
    Route::get("/auth/slider-images", [SliderImageController::class, 'index'])->name("auth.slider-images");
    Route::get("/auth/gallery-images", [GalleryImageController::class, 'index'])->name("auth.gallery-images");
    Route::get("/auth/leaders", [LeaderController::class, 'index'])->name("auth.leaders");
    Route::get("/auth/job-circulars", [JobCircularController::class, 'index'])->name("auth.job-circulars");
    Route::get("/auth/settings", [SettingController::class, 'index'])->name("auth.settings");
    Route::get("/auth/account-settings", [AccountSettingController::class, 'index'])->name("auth.account-setting");

});

require __DIR__.'/auth.php';
