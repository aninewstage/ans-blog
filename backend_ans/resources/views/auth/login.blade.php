@extends('admin.layouts.auth')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="text-center">
                    <a href="index.html" class="mb-5 d-block auth-logo">
                        <img src="{{ asset('assets/images/logo-dark.png') }}" alt="" height="22"
                            class="logo logo-dark">
                        <img src="{{ asset('assets/images/logo-light.png') }}" alt="" height="22"
                            class="logo logo-light">
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
                            <p class="text-muted">Sign in to continue to Minible.</p>
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

                                <div class="mt-4 text-center">
                                    <p class="mb-0">Don't have an account ? <a href="auth-register.html"
                                            class="fw-medium text-primary"> Signup now </a> </p>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>

                <div class="mt-5 text-center">
                    <p>©
                        <script>
                            document.write(new Date().getFullYear())
                        </script> Minible. Crafted with <i class="mdi mdi-heart text-danger"></i> by
                        Themesbrand
                    </p>
                </div>

            </div>
        </div>
        <!-- end row -->
    </div>
    <!-- end container -->
@endsection