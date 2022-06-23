let notes = [];

function hapusNote(id){
    const index = notes.findIndex(note => note.id === id);
    notes.splice(index,1);
    tampilNotes();
}

function tampilNotes(){
    const listNotes = document.getElementById("list-notes");

    listNotes.innerHTML = "";

    notes.map(note => {
        listNotes.innerHTML += `
        <div class="col">
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">${note.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                        ${note.created_at}</h6>
                    <p class="card-text">${note.body}</p>
                </div>
                <div class="card-footer d-flex justify-content-between">
                    <button class="btn btn-danger" onclick="hapusNote(${note.id})"
                        id="btnHapus">Hapus</button>
                </div>
            </div>
        </div>`
    })
}

// akan dijalankan setelah semua elemen didalam halam 
// ditampilkan semuanya
document.addEventListener("DOMContentLoaded",function(){

    // mengakses element dengan id btnsimpan
    // memberikan event click yang jika dijalankan
    document.getElementById("btnSimpan")
        .addEventListener("click",function(event){
            // mencegah halaman di reload
            event.preventDefault();
            // buat variabel yang memiliki akses ke masing2 element
            const title = document.getElementById("txtTitle");
            const body = document.getElementById("txtBody");

            const created_at = new Date();
            // menyimpan data title body dsb ke dalam array notes
            notes.push({
                id: +created_at,
                title: title.value,
                body: body.value,
                created_at: created_at
                                .toLocaleString("id-ID",
                                    {dateStyle: "full",timeStyle: "medium"})
            });

            title.value = "";
            body.value = "";

            tampilNotes();
    })
});