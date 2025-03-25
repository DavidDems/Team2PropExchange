<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PropertyController;
use App\Http\Controllers\UserController;
use App\Models\Property;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/properties', [PropertyController::class, 'index'])->name('properties.index');

Route::get('/properties/create', function () {
    return view('properties.create');
})->name('properties.create');

Route::post('/properties', [PropertyController::class, 'store'])->name('properties.store');



Route::get('/properties-map', function () {
    $properties = Property::all();
    return view('properties.map', compact('properties'));
})->name('properties.map');


Route::get('/login', function () {
    return view('login');
});

Route::get('/register', function () {
    return view('register');
});

Route::get('/search-suggestions', [PropertyController::class, 'getSuggestions']);

// Get CSRF token to pass for other postman request
Route::get('/csrf-token', function () {
    return response()->json([
        'csrf_token' => csrf_token(),
    ]);
});

// User routes

// Public routes
Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);

// Protected routes
Route::post('/logout', [UserController::class, 'logout']);
Route::put('/users/{userId}', [UserController::class, 'update']);
Route::delete('/users/{userId}', [UserController::class, 'delete']);
Route::get('/users/{userId}', [UserController::class, 'show']);
Route::get('/users/username/{username}', [UserController::class, 'getByUsername']);


// Property routes
// Route::post('/properties', [PropertyController::class, 'store']);
// Route::put('/properties/{propertyId}', [PropertyController::class, 'update']);
// Route::delete('/properties/{propertyId}', [PropertyController::class, 'destroy']);
// Route::get('/properties/{propertyId}', [PropertyController::class, 'show']);
// Route::get('/properties ', [PropertyController::class, 'index']);
