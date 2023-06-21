function importarCodigo() {
    const projectsHTML = `
    <section id="projects">
        <div class="row">
            <div class="project">
                <div class="overlay"></div>
                <img src="./assets/fondo-virtuastate.png" alt="Proyecto: Countries!" />
                <div class="info">
                    <h4>VirtuaState Client</h4>
                    <p>
                        For the best score in HTML and CSS they assigned me a
                        client, which is the company ¨VirtuaState¨. Still in
                        production with:<br />HTML, CSS and Javascript Vanilla.
                    </p>
                    <br />
                    <div class="links">
                        <a class="quitoSubrayado" href="https://virtuastate.net"
                            target="_blank">Deploy</a>
                        <p>||</p>
                        <a class="quitoSubrayado"
                            href="https://github.com/jonathansansok/virtua-state-web.git"
                            target="_blank">Repository</a>
                    </div>
                </div>
            </div>
            <div class="project">
                <div class="overlay"></div>
                <img src="./assets/fondo-reactjs.png" alt="Proyecto: React E-Commerce" />
                <div class="info">
                    <h4>E-Commerce React</h4>
                    <p>
                        It's an E-commerce where I implemented several ReactJs
                        utilities. I used:<br />HTML, CSS, Bootstrap,
                        Javascript, React and Firebase.
                    </p>
                    <br />
                    <div class="links">
                        <a class="quitoSubrayado"
                            href="https://ecommerce-react-jonathan-sanso.vercel.app/"
                            target="_blank">Deploy</a>
                        <p>||</p>
                        <a class="quitoSubrayado"
                            href="https://github.com/jonathansansok/react-e-commerce-jonathan-sanso.git"
                            target="_blank">Repository</a>
                    </div>
                </div>
            </div>
            <div class="project">
                <div class="overlay"></div>
                <img src="./assets/fondo-javascript.png" alt="Proyecto: html-css-javascript!" />
                <div class="info">
                    <h4>+ Art + Tech</h4>
                    <p>
                        Sound website and E-commerce Js Vanilla. I used:<br />
                        HTML5, CSS3, SASS, Bootstrap and JavaScript Vanilla.
                    </p>
                    <br />
                    <div class="links">
                        <a class="quitoSubrayado" href="https://art-tech-responsive.netlify.app/"
                            target="_blank">Deploy</a>
                        <p>||</p>
                        <a class="quitoSubrayado"
                            href="https://github.com/jonathansansok/more-art-more-tech-js-first-web.git"
                            target="_blank">Repository</a>
                    </div>
                </div>
            </div>
            <div class="project">
                <div class="overlay"></div>
                <img src="./assets/fondo-chat-back-end.png" alt="Proyecto: fondo-chat-back-end!" />
                <div class="info">
                    <h4>Back end Chat and E-commerce multi-users</h4>
                    <p>
                        With Node I created an E-commerce and Chat where the
                        messages and products are updated to the connected
                        users. I used:<br />
                        Express, Handlebars, Socket.io, Bootstrap and database
                        in .json that is migrating to MongoDB.
                    </p>
                    <br />
                    <div class="links">
                        <a class="quitoSubrayado"
                            href="https://github.com/jonathansansok/desafio-router-backend.git"
                            target="_blank">Deploy</a>
                        <p>||</p>
                        <a class="quitoSubrayado"
                            href="https://github.com/jonathansansok/desafio-router-backend.git"
                            target="_blank">Repository</a>
                    </div>
                </div>
            </div>
            <div class="project">
                <div class="overlay"></div>
                <img src="./assets/postgresql.png" alt="Proyecto: React E-Commerce" />
                <div class="info">
                    <h4>Library of Users and Rented Books</h4>
                    <p>
                        It is a database where I create users and books to be
                        rented. I used: PostgreSQL in PgAdmin4. To view in
                        PgAdmin4->
                        (databases>biblioteca>Schemas>public>tables{right
                        click>query tool>open file}).
                    </p>
                    <br />
                    <div class="links">
                        <a class="quitoSubrayado" href="./assets/biblioteca-j-sansok.sql" target="_blank"
                            class="download">Download .sql</a>
                    </div>
                </div>
            </div>
            <div class="project">
                <div class="overlay"></div>
                <img src="./assets/fondo-back-end-final-whats-app.png"
                    alt="Proyecto: fondo-chat-back-end!" />
                <div class="info">
                    <h4>Node Back-end Thunder&FrontEnd-Mongodb</h4>
                    <p>
                        Through NodeJs, Express, Mongodb, websocket and twilio,
                        create a back-end-Ecommerce and chat with the admin.
                    </p>
                    <br />
                    <div class="links">
                        <a class="quitoSubrayado"
                            href="https://github.com/jonathansansok/preEntregaFinal3.git"
                            target="_blank">Deploy</a>
                        <p>||</p>
                        <a class="quitoSubrayado"
                            href="https://github.com/jonathansansok/preEntregaFinal3.git"
                            target="_blank">Repository</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;

    const containers = document.getElementsByClassName("projectsContainer");

    for (let i = 0; i < containers.length; i++) {
        containers[i].innerHTML += projectsHTML;
    }
}

window.onload = function () {
    importarCodigo();
};
