<?php

use App\Http\Controllers\Blog\Author\AuthorController;
use App\Http\Controllers\Blog\CategoryController;
use App\Http\Controllers\Blog\PostController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

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
Route::group(['middleware' => ['auth'],'prefix' => 'ans'], function () {
    Route::get('/dashboard', [PageController::class,'dashboard'])->name('dashboard');

    Route::resource('/posts', PostController::class);
    Route::resource('/categories', CategoryController::class);
    Route::resource('/authors', AuthorController::class);
});

require __DIR__.'/auth.php';
