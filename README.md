<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Devon Casto's Website</title>
    <script>
        function toggleSideNav() {
            const sidenav = document.getElementById('sidenav');
            sidenav.style.left = sidenav.style.left === '0px' ? '-200px' : '0px';
        }

        function changeTitle() {
            const newTitle = document.getElementById('titleInput').value;
            document.title = newTitle || "Devon Casto's Website"; // Default title if input is empty
        }
    </script>
</head>

<body>
    <button id="smallnavbtn" onclick="toggleSideNav()"><i class="fa fa-bars" id="snbtnsub"></i></button>
  
   <nav class="m">
        <button class="navbtn" onclick="window.location.href='/';"><i class="fa fa-home"></i><br><span class="navtext">Home</span></button>
        <div class="right">
            <button class="navbtn" onclick="window.location.href='/axis';"><i class="fa fa-cube"></i><br><span class="navtext">Axis</span></button>
            <button class="navbtn" onclick="window.location.href='/games';"><i class="fa fa-gamepad"></i><br><span class="navtext">Games</span></button>
            <button class="navbtn" onclick="window.location.href='/apps';"><i class="fa fa-apps"></i><br><span class="navtext">apps</span></button>
        </div>
    </nav>

    <!-- Side Navigation -->
   <nav id="sidenav">
        <div style="height: 55px; width: 100%;"></div> <!-- spacer -->
        <button onclick="window.location.href='/';"><i class="fa fa-home"></i><span>Home</span></button>
        <button onclick="window.location.href='/axis';"><i class="fa fa-cube"></i><span>Axis</span></button>
        <button onclick="window.location.href='/games';"><i class="fa fa-gamepad"></i><span>Games</span></button>
        <button onclick="window.location.href='/apps';"><i class="fa fa-apps"></i><span>apps</span></button>
    </nav>

    <!-- Main Content -->
   <header>
        <h1>Devon Casto's Website</h1>
    </header>

    <!-- Title Input Section -->
   <section id="titleInputSection" style="text-align: center; margin: 20px;">
        <input type="text" id="titleInput" placeholder="Enter new title">
        <button onclick="changeTitle()">Set Title</button>
    </section>

    <!-- About Section -->
   <section id="about">
        <h2>About Me</h2>
        <p>Hi! I'm Devon Casto, a web developer for creating "school-friendly" websites.</p>
    </section>

    <!-- Contact Section -->
   <section id="contact">
        <h2> old Contact information</h2>
        <p>Email: dlcasto3@boe.jack.k12.wv.us</p>
    </section>

    <!-- Footer -->
   <footer>
        <p> credits to wraithcode2023 </p>
    </footer>
</body>
</html>
