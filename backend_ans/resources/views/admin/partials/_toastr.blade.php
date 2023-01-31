<script src="{{ asset('assets/libs/toastr/build/toastr.min.js') }}"></script>
<script>
    @if (Session::has('success'))
        toastr.options = {
            "closeButton": true,
            "progressBar": true,
            "showDuration": "10000",
            "positionClass": "toast-top-right",
        }
        toastr.success("{{ session('success') }}");
    @endif

    @if (Session::has('error'))
        toastr.options = {
            "closeButton": true,
            "progressBar": true,
            "showDuration": "10000",
            "positionClass": "toast-top-right",
        }
        toastr.error("{{ session('error') }}");
    @endif
</script>
