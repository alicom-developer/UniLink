
// Global Chat
function sendChat(e){
  e.preventDefault();
  const input = document.getElementById('globalInput');
  const text = (input.value || '').trim();
  if(!text) return;
  alert('Message sent: ' + text);
  input.value = '';
}

// Marketplace: Boom Plus points
let points = 0;
function openBoomPlus(){
  document.getElementById('boomPlus').classList.remove('hidden');
}
function closeModal(){
  document.getElementById('boomPlus').classList.add('hidden');
}
function earnPoints(){
  points += 200;
  document.getElementById('pointsText').textContent = 'Points: ' + points;
  alert('You watched an ad and earned 200 points!');
}

// Marketplace: Post listing (placeholder)
function postListing(e){
  e.preventDefault();
  const inputs = e.target.querySelectorAll('input, select');
  const [name, price, cat] = inputs;
  document.getElementById('postMsg').textContent =
    `Listing posted: ${name.value} — TZS ${price.value} (${cat.value})`;
  e.target.reset();
}

// Education: Simulate auto-redirect context and admin-only uploads
function initEducation(){
  // Simulate saved login details (course + year)
  const course = localStorage.getItem('course') || 'Computer Science';
  const year = localStorage.getItem('year') || 'Year 2';
  document.getElementById('groupTag').textContent = `Course: ${course} | Year: ${year}`;
}

function adminUpload(e){
  e.preventDefault();
  const isAdmin = localStorage.getItem('isAdmin') === 'true';
  if(!isAdmin){
    alert('Only class rep (admin) can upload to NEWS/NOTES/ASSIGNMENTS.');
    return;
  }
  const title = document.getElementById('adminTitle').value.trim();
  alert(`Admin uploaded: ${title}`);
  e.target.reset();
}

function sendEduChat(e){
  e.preventDefault();
  const input = document.getElementById('eduInput');
  const text = (input.value || '').trim();
  if(!text) return;
  // Append text-only message
  const list = document.getElementById('eduChat');
  const li = document.createElement('li');
  li.className = 'msg msg-right';
  li.innerHTML = `
    <div class="bubble bubble-yellow">
      <div class="meta">You • ${new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</div>
      <div class="text">${escapeHtml(text)}</div>
    </div>
    <div class="avatar">U</div>
  `;
  list.appendChild(li);
  input.value = '';
}

// Map interactions
function showBuilding(name, cat){
  const info = document.getElementById('mapInfo');
  info.classList.remove('hidden');
  info.textContent = `${name} — Category: ${cat}`;
}
function filterMap(cat){
  alert('Filter applied: ' + cat);
}
function searchMap(){
  const q = document.getElementById('mapSearch').value.trim();
  alert('Search: ' + q);
}

// Utility
function escapeHtml(str){
  return str.replace(/[&<>"']/g, s => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[s]));
}

// Demo: set admin/course/year quickly from console (optional)
// localStorage.setItem('isAdmin','true');
// localStorage.setItem('course','Economics');
// localStorage.setItem('year','Year 3');
