@extends('admin.layouts.app')

@section('styles')
    <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.css" rel="stylesheet">
@endsection

@section('content')
    <div class="container-fluid">

        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box d-flex align-items-center justify-content-between">
                    <h4 class="mb-0">Add Product</h4>

                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Posts</a></li>
                            <li class="breadcrumb-item active">Add Post</li>
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
                                        <h5 class="font-size-16 mb-1">Post Info</h5>
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
                                <form action="{{ route('posts.store') }}" method="POST" id="post-form">
                                    @csrf
                                    <div class="mb-3">
                                        <label class="form-label" for="blogtitle">Blog Title</label>
                                        <input id="blogtitle" name="title" type="text" class="form-control"
                                            placeholder="Enter your Blog Title" value="{{ old('title') }}">
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label" class="control-label">Category</label>
                                                <select class="form-control select2" name="category_id">
                                                    <option value="">Select</option>
                                                    @foreach ($parent_cat as $item)
                                                        <option value="{{ $item->id }}"
                                                            {{ old('category_id') === $item->id ? 'selected' : '' }}>
                                                            {{ $item->name }}</option>
                                                    @endforeach
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label" class="control-label">Sub Category</label>

                                                <select class="select2 form-control select2" data-placeholder="Choose ..."
                                                    name="sub_category_id">
                                                    <option value="">Select</option>
                                                    @foreach ($sub_cat as $item)
                                                        <option value="{{ $item->id }}"
                                                            {{ old('sub_category_id') === $item->id ? 'selected' : '' }}>
                                                            {{ ucwords($item->parent_category->name) }} -
                                                            {{ $item->name }}
                                                        </option>
                                                    @endforeach
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="mb-3">
                                        <label class="form-label" for="blogtags">Blog Tags</label>
                                        <input id="blogtags" name="tags" type="text" class="form-control"
                                            placeholder="Enter your Blog Tags with comma separted - eg.( horror,comedy,supernatural,anime,manhwa)"
                                            value="{{ old('tags') }}">
                                    </div>

                                    <div class="mb-0">
                                        <textarea id="summernote" name="body">{{ old('body') }}</textarea>
                                    </div>

                                    <div class="mt-3">
                                        <div class="form-check form-switch">
                                            <input type="hidden" name="published" value="0" />

                                            <input type="checkbox" class="form-check-input" id="customSwitch1"
                                                value="1" name="published">
                                            <label class="form-check-label" for="customSwitch1">Published?</label>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <a href="#addproduct-img-collapse" class="text-dark collapsed" data-bs-toggle="collapse"
                            aria-haspopup="true" aria-expanded="false" aria-haspopup="true"
                            aria-controls="addproduct-img-collapse">
                            <div class="p-4">
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 me-3">
                                        <div class="avatar-xs">
                                            <div class="avatar-title rounded-circle bg-soft-primary text-primary">
                                                02
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex-grow-1 overflow-hidden">
                                        <h5 class="font-size-16 mb-1">Post Image</h5>
                                        <p class="text-muted text-truncate mb-0">Fill all information below</p>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <i class="fas fa-angle-down font-size-24"></i>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <div id="addproduct-img-collapse" class="collapse" data-bs-parent="#addproduct-accordion">
                            <div class="p-4 border-top">
                                <div class="mb-3">
                                    <label class="form-label" for="blogposter">Blog Poster URL (<a
                                            href="https://imgbb.com/">click
                                            here</a> to upload and get
                                        poster url)</label>
                                    <input id="blogposter" name="poster" type="text" class="form-control"
                                        placeholder="Enter your Blog Poster" value="{{ old('poster') }}">
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end row -->

        <div class="row mb-4">
            <div class="col ms-auto">
                <div class="d-flex flex-reverse flex-wrap gap-2">
                    <a href="{{ route('posts.index') }}" class="btn btn-danger"> <i class="uil uil-times"></i> Cancel
                    </a>
                    <a onclick="document.getElementById('post-form').submit();" href="#" class="btn btn-success">
                        <i class="uil uil-file-alt"></i>
                        Save </a>
                </div>
            </div> <!-- end col -->
        </div> <!-- end row-->

    </div> <!-- container-fluid -->
@endsection

@section('scripts')
    <script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.js"></script>

    <script>
        $(document).ready(function() {
            $('#summernote').summernote({
                placeholder: 'Hello Aninewstage Author,Let write your some idea.',
                tabsize: 2,
                height: 200,
                destroyOnClose: true,
            });
        });
    </script>
@endsection
