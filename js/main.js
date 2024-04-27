let page1 = false;
let page2 = false;
let page3 = false;
let page4 = false;


function redirectPage(pageName) {
  switch (pageName) {
    case 'second-page':
      if (page1) {
        window.location.href = `../pages/${pageName}.html`;
      } else {
        $(document).ready(function() {
          $('#modal1').modal('show');
        });
        page1 = true;
      }
      break;
    case 'third-page':
      if (page2) {
        window.location.href = `../pages/${pageName}.html`;
      } else {
        $(document).ready(function() {
          $('#modal2').modal('show');
        });
        page2 = true;
      }
      break;
    case 'fourth-page':
      if (page3) {
        window.location.href = `../pages/${pageName}.html`;
      } else {
        $(document).ready(function() {
          $('#modal3').modal('show');
        });
        page3 = true;
      }
      break;
  
    default:
      break;
  }
}

function closeModal(id) {
  $('#'+id).modal('hide');
}