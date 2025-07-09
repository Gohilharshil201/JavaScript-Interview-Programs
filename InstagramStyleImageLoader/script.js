const gallery = document.getElementById("gallery");
const loadMoreBtn = document.getElementById("loadMore");

let page = 1;
const limit = 12;

async function fetchImages() {
  try {
    const res = await fetch(
      `https://picsum.photos/v2/list?page=${page}&limit=${limit}`
    );
    const images = await res.json();

    images.forEach((img) => {
      const imgElement = document.createElement("img");
      imgElement.src = `https://picsum.photos/id/${img.id}/400/400`;
      imgElement.alt = img.author;
      gallery.appendChild(imgElement);
    });

    page++;
  } catch (err) {
    console.error("Error fetching images:", err);
  }
}

// Initial load
fetchImages();

// Load more on button click
loadMoreBtn.addEventListener("click", fetchImages);
