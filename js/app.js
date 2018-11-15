class UserUI {
    constructor() {
        this._container = document.querySelector(".posts-wrapper");
    }

    addUser(user) {
        const template = UserUI._createTemplate(user);
        this._container.insertAdjacentHTML("beforeend", template);
    }

    showEmptyMsg() {
        this._container.insertAdjacentHTML("beforeend", UserUI._emptyContainerTemplate());
    }

    static _createTemplate({ name, username, email, phone, website }) {
        return `
        <div class="mt-4 bg-light">
            <details>
                <summary><span class="h4">${name}</span></summary>
                <p>
                    <ul>
                        <li>Username: <span class="font-weight-bold h5">${username}</span></li>
                        <li>Email: <a href="mailto:${email}">${email}</a></li>
                        <li>Phone: <a href="tel:${phone}">${phone}</a></li>
                        <li>Website: <a href="${website}">${website}</a></li>
                    </ul>
                </p>
            </details>
        </div>
        `
    }

    static _emptyContainerTemplate() {
        return `<div class="alert alert-info">Нет постов.</div>`
    }
}

function generateUsers(users) {
    const ui = new UserUI();
    if (!users.length) return ui.showEmptyMsg();
    users.forEach(user => ui.addUser(user));
}

const http = new CustomHttp();
const apiUrl = "https://jsonplaceholder.typicode.com";

http.get(`${apiUrl}/users`, (res) => {
    generateUsers(res);
});