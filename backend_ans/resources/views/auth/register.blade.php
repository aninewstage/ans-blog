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
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <form action="{{ route('register') }}" method="POST" id="register-form">
                            @csrf
                            <div class="text-center mt-2">
                                <h5 class="text-primary">Welcome !</h5>
                                <p class="text-muted">Sign up to become a author at ANS Blogs.</p>
                            </div>

                            <div id="basic-example">
                                <!-- Author Details -->
                                <h3>Author Details</h3>
                                <section>
                                    @foreach ($errors->all() as $message)
                                        <p style="color:red;">{{ $message }}</p>
                                    @endforeach
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="mb-3">
                                                <label for="basicpill-firstname-input">Username <span
                                                        style="color: red">*</span></label>
                                                <input type="text" class="form-control" id="basicpill-firstname-input"
                                                    name="username" placeholder="Enter your username"
                                                    value="{{ old('username') }}">
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="mb-3">
                                                <label for="basicpill-lastname-input">Full Name <span
                                                        style="color: red">*</span></label>
                                                <input type="text" class="form-control" id="basicpill-lastname-input"
                                                    name="name" placeholder="Enter your full name"
                                                    value="{{ old('name') }}">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="mb-3">
                                                <label for="basicpill-phoneno-input">Phone</label>
                                                <input type="tel" class="form-control" id="basicpill-phoneno-input"
                                                    name="ph_number" placeholder="Enter your phone number"
                                                    value="{{ old('ph_number') }}">
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="mb-3">
                                                <label for="basicpill-email-input">Email <span
                                                        style="color: red">*</span></label>
                                                <input type="email" class="form-control" name="email"
                                                    id="basicpill-email-input" placeholder="Enter your email address"
                                                    value="{{ old('email') }}">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="mb-3">
                                                <label for="basicpill-firstname-input">Password <span
                                                        style="color: red">*</span></label>
                                                <input type="password" class="form-control" id="basicpill-firstname-input"
                                                    name="password" placeholder="Enter your password">
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="mb-3">
                                                <label for="basicpill-lastname-input">Confirm Password<span
                                                        style="color: red">*</span></label>
                                                <input type="password" class="form-control" id="basicpill-lastname-input"
                                                    name="password_confirmation"
                                                    placeholder="Enter your passoword confirmation">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="mb-3">
                                                <label for="basicpill-address-input">Bio <span style="color: red">*</span>
                                                </label>
                                                <textarea id="basicpill-address-input" name="bio" class="form-control" rows="2" placeholder="Enter your bio">{{ old('bio') }}</textarea>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <!-- Company Document -->
                                <h3>Social Account Link</h3>
                                <section>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="mb-3">
                                                <label for="basicpill-servicetax-input">Profile Picture (<a
                                                        href="https://imgbb.com">click here</a> to
                                                    upload) <span style="color: red">*</span></label>
                                                <input type="url" name="avatar" class="form-control"
                                                    id="basicpill-servicetax-input"
                                                    placeholder="Enter your profile picture url"
                                                    value="{{ old('avatar') }}">
                                            </div>
                                        </div><!-- end col-lg-6 -->


                                        <div class="col-lg-6">
                                            <div class="mb-3">
                                                <label for="basicpill-pancard-input">Facebook <span
                                                        style="color: red">*</span></label>
                                                <input type="url" class="form-control" id="basicpill-pancard-input"
                                                    name="facebook" placeholder="Enter your facebook account url"
                                                    value="{{ old('facebook') }}" />
                                            </div>
                                        </div><!-- end col-lg-6 -->

                                    </div><!-- end row -->
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="mb-3">
                                                <label for="basicpill-vatno-input">Telegram <span
                                                        style="color: red">*</span></label>
                                                <input type="url" class="form-control" name="telegram"
                                                    id="basicpill-vatno-input" placeholder="Enter your telegram number"
                                                    value="{{ old('telegram') }}">
                                            </div>
                                        </div><!-- end col-lg-6 -->

                                        <div class="col-lg-6">
                                            <div class="mb-3">
                                                <label for="basicpill-cstno-input">Twitter</label>
                                                <input type="url" class="form-control" name="twitter"
                                                    id="basicpill-cstno-input"
                                                    placeholder="Enter your twitter account url"
                                                    value="{{ old('twitter') }}">
                                            </div>
                                        </div><!-- end col-lg-6 -->

                                    </div><!-- end row -->
                                </section>

                                <!-- Confirm Details -->
                                <h3>Confirm Detail</h3>
                                <section>
                                    <div class="row justify-content-center">
                                        <div class="col-lg-6">
                                            <div class="text-center">
                                                <div class="mb-4">
                                                    <i class="mdi mdi-check-circle-outline text-success display-4"></i>
                                                </div>
                                                <div>
                                                    <h5>Confirm Detail</h5>
                                                    <p class="text-muted">If several languages coalesce, the grammar of the
                                                        resulting</p>
                                                </div>
                                            </div>
                                        </div><!-- end col-lg-6 -->
                                    </div><!-- end row -->
                                </section>
                            </div>
                        </form>
                    </div>
                    <!-- end card body -->
                </div>
                <!-- end card -->
            </div>
            <!-- end col -->
        </div>
        <!-- end row -->

    </div> <!-- container-fluid -->
@endsection
