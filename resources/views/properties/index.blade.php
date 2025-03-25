@extends('layouts.app')
@section('title', 'Search Properties')

@section('content')
<div class="container mt-4">
  @include('components.property-search')

  <!-- View Map Button -->
  <div class="text-end mt-2">
    <a href="{{ route('properties.map') }}" class="btn btn-outline-primary">
      <i class="bi bi-map"></i> View Map
    </a>
  </div>

  @foreach($properties as $property)
  <div class="card">
    <div class="card-title">
      <h2>{{$property['title']}}</h2>
      <p>{{$property['description']}}</p>
      <a href="{{$property['id']}}">View Property</a>
    </div>
  </div>
  @endforeach
  <div>
    @endsection