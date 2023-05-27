<?php

use App\Http\Controllers\SzakdogaController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/api/szakdogak', [SzakdogaController::class,'index']);
Route::get('/api/szakdogak/{id}', [SzakdogaController::class,'show']);
Route::post('/api/szakdogak', [SzakdogaController::class,'store']);
Route::put('/api/szakdogak/{id}', [SzakdogaController::class,'update']);
Route::delete('/api/szakdogak/{id}', [SzakdogaController::class,'destroy']);


Route::get('/', function () {
    return view('welcome');
});
