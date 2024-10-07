const sidebar = document.querySelector('.sidebar');

function toggleSidebarContent() {
  // Check if the sidebar <ul> list has children
  const ul = sidebar.querySelector('ul');
  if (ul && ul.hasChildNodes()) {
    // Remove the first child
    ul.removeChild(ul.firstChild);
    console.log('Removed the first child from the sidebar list.');
  } else {
    console.log('No children to remove from the sidebar list.');
  }

  // Create and add a <p> element to the sidebar
  const p = document.createElement('p');
  p.textContent = 'New content added to the sidebar!';
  sidebar.appendChild(p);
  console.log('Added new content to the sidebar.');
}

// Add a button to toggle the sidebar content
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Sidebar Content';
toggleButton.addEventListener('click', toggleSidebarContent);

// Append the button to the body
document.body.appendChild(toggleButton);
