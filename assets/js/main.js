// ===== VARIABLE ==================================================== //
const el_container = document.querySelector('.container')
const el_row = document.querySelector('.row')
const teamMembers = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer", foto: "scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"
    }
]

// ===== MAIN ======================================================== //
/* milestone1(); */
/* milestone2(); */
/* bonus1();  */
bonus2()

// ===== EVENT ======================================================= //


// ===== FUNCTION ==================================================== //
function milestone1() {
    for (let i = 0; i < teamMembers.length; i++) {
        member = teamMembers[i];
        console.log(`teamMembers[${i}]:`);
        for (const key in member) {
            console.log(`${key} = ${member[key]}`);
        }
        console.log("");
    }
}

function milestone2() {
    const ul_extern = document.createElement("ul");
    el_container.append(ul_extern);

    for (let i = 0; i < teamMembers.length; i++) {
        const li_extern = document.createElement("li");
        li_extern.innerText = `teamMembers[${i}]`;
        ul_extern.append(li_extern);

        const ul_inner = document.createElement("ul");
        li_extern.append(ul_inner);

        member = teamMembers[i];
        for (const key in member) {
            const li_inner = document.createElement("li");
            bonus1(key, li_inner, member[key]);
            ul_inner.append(li_inner)
        }
    }
}

function bonus1(key, li_inner, field) {
    if (key == "foto") {
        const el_img = document.createElement("img");
        el_img.src = `./assets/img/${field}`;
        li_inner.append(el_img);
    } else {
        li_inner.innerText = `${key} = ${field}`
    }
}

function bonus2() {
    for (let i = 0; i < teamMembers.length; i++) {
        member = teamMembers[i];
        el_row.innerHTML += `
        <div class="col-6">
            <div class="card">
                <div class="card-header">
                    <h2 class="text-center">${member["nome"]}</h2>
                </div>
                <!-- /.card-body -->
                <div class="card-header">
                    <h4 class="card-title text-center">${member["ruolo"]}</h4>
                    <img src="./assets/img/${member["foto"]}" class="card-img-top" alt="...">
                </div>
                <!-- /.card-body -->
            </div>
            <!-- /.card -->
        </div>
        <!-- /.col -->
        `
    }
}
