$(document).ready(function() {
    $('#toggleBtn').click(function() {
        let input = $('#password');
        let type = input.attr('type');

        // Ubah tipe input password <-> text
        if (type === 'password') {
            input.attr('type', 'text');
            $(this).text('Hide');
            $('#status').text('Password sedang ditampilkan');
        } else {
            input.attr('type', 'password');
            $(this).text('Show');
            $('#status').text('Password disembunyikan');
        }

        // Contoh penggunaan AJAX (dummy API)
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            method: 'GET',
            success: function(data) {
                console.log('AJAX berhasil:', data);
            },
            error: function() {
                console.log('AJAX gagal dijalankan');
            }
        });
    });
});