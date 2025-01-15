function updateNavAndFooter() {
    const navm = document.getElementById("navm");
    navm.classList.add("m");
    navm.innerHTML = `
        <button class="navbtn" onclick="window.location.href='/';"><i class="wicon wicon-home"></i><br><span class="navtext">Home</span></button>
        <div class="right">
            <button class="navbtn" onclick="window.location.href='/axis/';"><i class="wicon wicon-axis"></i><br><span class="navtext">Axis</span></button>
            <button class="navbtn" onclick="window.location.href='/games/';"><i class="wicon wicon-gamepad-handles"></i><br><span class="navtext">Games</span></button>
            <button onclick="window.location.href='/apps/';"><br><span class="navtext">apps</span></button>
        </div>
    `;
    const navs = document.getElementById("sidenav");
    navs.innerHTML = `
        <div style="height: 55px; width: 100%;"></div> <!-- spacer -->
        <button onclick="window.location.href='/';"><i class="wicon wicon-home"></i><br><span class="navtext">Home</span></button>
        <button onclick="window.location.href='/axis/';"><i class="wicon wicon-axis"></i><br><span class="navtext">Axis</span></button>
        <button onclick="window.location.href='/games/';"><i class="wicon wicon-gamepad-handles"></i><br><span class="navtext">Games</span></button>
        <button onclick="window.location.href='/apps/';"><br><span class="navtext">apps</span></button>
    `;
            
    const footer = document.getElementById("footer");
    footer.innerHTML += `
        <div class="top">
            <h5>Made with <span class="wicon wicon-coffee"></span> by wraithcode <i class="wicon wicon-copyright"></i> <span id="footerYear">****</span></h5>
            <div class="spacer"></div>
            <h5 id="status">Status: <span>LOADING</span></h5>
        </div>
        <div class="bottom">
            <div class="leftwrapper">
                <div class="section">
                    <p>Personal links</p>
                    <a href="https://github.com/dlcasto4"><i class="wicon wicon-github"></i>&nbsp;Github</a>
                </div>
                    <div class="section">
                    <p>Navigation</p>
                    <a href="https://forms.gle/NFSRt3jn6fzgFyBH8"><i class="wicon wicon-gamepad-handles"></i>&nbsp;Game Request Form</a>
                </div>
        </div>
    `;
}
document.addEventListener("DOMContentLoaded", updateNavAndFooter)
