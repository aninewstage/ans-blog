@extends('admin.layouts.auth')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="text-center">
                    <a href="index.html" class="mb-5 d-block auth-logo">
                        <img src="https://files.aninewstage.org/file/ans-assets/assets/logo-bottom.png" alt=""
                            height="100" class="logo logo-dark">
                        <img src="https://files.aninewstage.org/file/ans-assets/assets/logo-bottom.png" alt=""
                            height="100" class="logo logo-light">
                    </a>
                </div>
            </div>
        </div>
        <div class="row align-items-center justify-content-center">
            <div class="col-md-8 col-lg-6 col-xl-5">
                <div class="card">

                    <div class="card-body p-4">
                        <div class="text-center mt-2">
                            <h5 class="text-primary">Welcome Back !</h5>
                            <p class="text-muted">Sign in to continue to Aninewstage Blogs.</p>
                        </div>
                        <div class="p-2 mt-4">
                            <form action="{{ route('login') }}" method="POST">
                                @csrf

                                <div class="mb-3">
                                    <label class="form-label" for="email">Email</label>
                                    <input type="text" class="form-control" id="email" placeholder="Enter email"
                                        name="email">
                                </div>

                                <div class="mb-3">
                                    <div class="float-end">
                                        <a href="auth-recoverpw.html" class="text-muted">Forgot password?</a>
                                    </div>
                                    <label class="form-label" for="userpassword">Password</label>
                                    <input type="password" name="password" class="form-control" id="userpassword"
                                        placeholder="Enter password">
                                </div>

                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" name="remember"
                                        id="auth-remember-check">
                                    <label class="form-check-label" for="auth-remember-check">Remember me</label>
                                </div>

                                <div class="mt-3 text-end">
                                    <button class="btn btn-primary w-sm waves-effect waves-light" type="submit">Log
                                        In</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <!-- end row -->
    </div>
    <!-- end container -->
@endsection
