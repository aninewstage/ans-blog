@extends('admin.layouts.app')

@section('content')
    <div class="container-fluid">

        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box d-flex align-items-center justify-content-between">
                    <h4 class="mb-0">Edit Category</h4>

                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Categories</a></li>
                            <li class="breadcrumb-item active">Edit Category</li>
                        </ol>
                    </div>

                </div>
            </div>
        </div>
        <!-- end page title -->

        <div class="row">
            <div class="col-lg-12">
                <div id="addproduct-accordion" class="custom-accordion">
                    <div class="card">
                        <a href="#addproduct-billinginfo-collapse" class="text-dark" data-bs-toggle="collapse"
                            aria-expanded="true" aria-controls="addproduct-billinginfo-collapse">
                            <div class="p-4">
                                @foreach ($errors->all() as $message)
                                    <p style="color:red;">{{ $message }}</p>
                                @endforeach

                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 me-3">
                                        <div class="avatar-xs">
                                            <div class="avatar-title rounded-circle bg-soft-primary text-primary">
                                                01
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex-grow-1 overflow-hidden">
                                        <h5 class="font-size-16 mb-1">Category Info</h5>
                                        <p class="text-muted text-truncate mb-0">Fill all information below</p>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <i class="fas fa-angle-down font-size-24"></i>
                                    </div>

                                </div>

                            </div>
                        </a>

                        <div id="addproduct-billinginfo-collapse" class="collapse show"
                            data-bs-parent="#addproduct-accordion">
                            <div class="p-4 border-top">
                                <form action="{{ route('categories.update', $category->id) }}" method="POST"
                                    id="category-form">
                                    @csrf
                                    @method('PUT')
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="mb-3">
                                                <label class="form-label" class="control-label">Choose as main or sub
                                                    category</label>
                                                <select class="form-control select2" name="parent_id">
                                                    <option value="0">Select this as a main category</option>
                                                    @if ($category->parent_category !== null)
                                                        @foreach ($parent_cat as $item)
                                                            <option value="{{ $item->id }}"
                                                                {{ $category->parent_category->id === $item->id ? 'selected' : '' }}>
                                                                {{ $item->name }}</option>
                                                        @endforeach
                                                    @else
                                                        @foreach ($parent_cat as $item)
                                                            <option value="{{ $item->id }}">
                                                                {{ $item->name }}</option>
                                                        @endforeach
                                                    @endif
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label" for="catname">Category name</label>
                                        <input id="catname" name="name" type="text" class="form-control"
                                            placeholder="Enter your Category Name" value="{{ $category->name }}">
                                    </div>

                                    <div class="mt-3">
                                        <div class="form-check form-switch">
                                            <input type="hidden" name="published" value="0" />

                                            <input type="checkbox" class="form-check-input" id="customSwitch1"
                                                value="1" name="published">
                                            <label class="form-check-label" for="customSwitch1">Published?</label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end row -->

        <div class="row mb-4">
            <div class="col ms-auto">
                <div class="d-flex flex-reverse flex-wrap gap-2">
                    <a href="{{ route('categories.index') }}" class="btn btn-danger"> <i class="uil uil-times"></i> Cancel
                    </a>
                    <a onclick="document.getElementById('category-form').submit();" href="#" class="btn btn-success">
                        <i class="uil uil-file-alt"></i> Save </a>
                </div>
            </div> <!-- end col -->
        </div> <!-- end row-->

    </div> <!-- container-fluid -->
@endsection
