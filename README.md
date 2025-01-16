<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Devon Casto's Website</title>
    <script>
        function toggleSideNav() {
            const sidenav = document.getElementById('sidenav');
            sidenav.style.left = sidenav.style.left === '0px' ? '-200px' : '0px';
        }
</head>

<body>
    <!-- dlcasto4@gmail.com -->
        <h1>Devon Casto's Website</h1>

   <section id="titleInputSection" style="text-align: center; margin: 20px;">
        <input type="text" id="titleInput" placeholder="Enter new title">
        <button onclick="changeTitle()">Set Title</button>
    </section>

   <section id="about">
        <h2>About Me</h2>
        <p>Hi! I'm Devon Casto, a web developer for creating "school-friendly" websites.</p>
    </section>

   <section id="contact">
        <h2> old Contact information</h2>
        <p>Email: dlcasto3@boe.jack.k12.wv.us</p>
    </section>

   <footer>
        <p> credits to wraithcode2023 </p>
    </footer>
</body>
</html>
