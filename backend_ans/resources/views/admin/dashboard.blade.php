@extends('admin.layouts.app')
@section('content')
    <div class="container-fluid">

        <div class="row">
            <div class="col-md-4 col-xl-4">
                <div class="card">
                    <div class="card-body">
                        <div class="float-end mt-2">
                            <div id="total-revenue-chart" data-colors='["--bs-primary"]'></div>
                        </div>
                        <div>
                            <h4 class="mb-1 mt-1"><span data-plugin="counterup">{{ $blogsCount }}</span></h4>
                            <p class="text-muted mb-0">Total Blogs</p>
                        </div>
                    </div>
                </div>
            </div> <!-- end col-->

            <div class="col-md-4 col-xl-4">
                <div class="card">
                    <div class="card-body">
                        <div class="float-end mt-2">
                            <div id="orders-chart" data-colors='["--bs-success"]'> </div>
                        </div>
                        <div>
                            <h4 class="mb-1 mt-1"><span data-plugin="counterup">{{ $catCount }}</span></h4>
                            <p class="text-muted mb-0">Total Categories</p>
                        </div>
                    </div>
                </div>
            </div> <!-- end col-->

            <div class="col-md-4 col-xl-4">
                <div class="card">
                    <div class="card-body">
                        <div class="float-end mt-2">
                            <div id="customers-chart" data-colors='["--bs-primary"]'> </div>
                        </div>
                        <div>
                            <h4 class="mb-1 mt-1"><span data-plugin="counterup">{{ $authorsCount }}</span></h4>
                            <p class="text-muted mb-0">Total Authors</p>
                        </div>
                    </div>
                </div>
            </div> <!-- end col-->
        </div> <!-- end row-->

        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title mb-4">Latest Blog Posts</h4>
                        <div class="table-responsive">
                            <table class="table table-centered table-nowrap mb-0">
                                <thead class="table-light">
                                    <tr>
                                        <th>ID</th>
                                        <th>Poster</th>
                                        <th>Title</th>
                                        <th>Body</th>
                                        <th>Author</th>
                                        <th>Created At</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($blogs as $item)
                                        <tr>
                                            <td>{{ $loop->iteration }}
                                            </td>
                                            <td>
                                                <img src="{{ $item->poster }}" alt=""
                                                    class="img-fluid avatar-lg img-thumbnail">
                                            </td>
                                            <td>
                                                {{ Str::limit($item->title, 20) }}
                                            </td>
                                            <td>
                                                {{ Str::limit($item->body, 20) }}
                                            </td>
                                            <td>
                                                <span
                                                    class="badge rounded-pill bg-soft-info font-size-12">{{ $item->author->username }}</span>
                                            </td>
                                            <td>
                                                {{ $item->created_at->diffForHumans() }}
                                            </td>
                                            <td>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                        <!-- end table-responsive -->
                    </div>
                </div>
            </div>
        </div>
        <!-- end row -->

    </div> <!-- container-fluid -->
@endsection
