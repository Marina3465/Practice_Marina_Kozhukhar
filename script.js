function openMenu(evt, menuName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openQue(evt, queName) {
  var i, tab_content, tablinks_q;

  tab_content = document.getElementsByClassName("tab_content");
  for (i = 0; i < tab_content.length; i++) {
    tab_content[i].style.display = "none";
  }

  tablinks_q = document.getElementsByClassName("tablinks_q");
  for (i = 0; i < tablinks_q.length; i++) {
    tablinks_q[i].className = tablinks_q[i].className.replace(" active", "");
  }

  document.getElementById(queName).style.display = "block";
  evt.currentTarget.className += " active";
}
