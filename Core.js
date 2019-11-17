
function displayFlashCards()
{
    fetch("/flashcards")
        .then((res) => res.json())
        .then((data) => {
            let table = document.getElementById("flashcard-container");
            for(i = 0; i < data.length; i++)
            {
                if(data[i] != null)
                {
                    //Create the flashcard elements
                    let tableRow = document.createElement("tr");
                    let front = document.createElement("td");
                    let back = document.createElement("td");
                    let deleteCard = document.createElement("td");
                    let index = i;

                    front.classList.add("flashcard");
                    front.innerHTML = data[i].front;
            
                    back.classList.add("flashcard");
                    back.innerHTML = data[i].back;

                    deleteCard.classList.add("deleteButton");
                    deleteCard.colspan = "40";
                    deleteCard.onclick = () => {deleteFlashCard(index)};

                    tableRow.appendChild(front);
                    tableRow.appendChild(back);
                    tableRow.appendChild(deleteCard);

                    table.appendChild(tableRow);
                }
            }
        });
}

function createFlashCard()
{
    const formElement = document.getElementById("mainForm");

    const data = new URLSearchParams();
    for (const pair of new FormData(formElement)) {
        data.append(pair[0], pair[1]);
    }

    fetch("/flashcards", {
        method: 'POST',
        body: data
    })
    .then(console.log("Successfull card creation"));
}

function deleteFlashCard(cardIndex)
{
    fetch(`/flashcards/${cardIndex}`, {
        method: 'DELETE'
    })
    .then(console.log("Successfull card deletion"))
    .then(location.reload());
}
