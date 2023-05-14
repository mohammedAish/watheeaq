// Dashboard Side Navigation
$(document).ready(function(){

  
  $(".humbargur-button").click(function(){
    // $(".humbargur-button").addClass("change-2");
    $(".leftsidebar").addClass("close2");
    $(".right-sec").addClass("open1");
  });

  $(".close-menu").click(function(){
    // $(".humbargur-button").removeClass("change-2");
    $(".leftsidebar").removeClass("close2");
    $(".right-sec").removeClass("open1");
  });

//22fab texteditor-sidemenu
$("#dropdown-btnone").click(function() {
  $(".dropdown-openone").toggle();
});
$("#dropdown-btntwo").click(function() {
  $(".dropdown-opentwo").toggle();
});
$("#dropdown-btnthree").click(function() {
  $(".dropdown-openthree").toggle();
});
$("#dropdown-btnfour").click(function() {
  $(".dropdown-openfour").toggle();
});


    var url = window.location.pathname,
        urlRegExp = new RegExp(url.replace(/\/$/, '') + "$"); // create regexp to match current url pathname and remove trailing slash if present as it could collide with the link in navigation in case trailing slash wasn't present there
    // now grab every link from the navigation
    $('.sidebar-menu ul li a').each(function () {
        // and test its normalized href against the url pathname regexp
        if (urlRegExp.test(this.href.replace(/\/$/, ''))) {
            $(this).addClass('active');
        }
    });
  
});

// Side Navigation Menu

$(".sidebar-dropdown > a").click(function() {
  $(".sidebar-submenu").slideUp(200);
  if (
    $(this)
      .parent()
      .hasClass("active")
  ) {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .parent()
      .removeClass("active");
  } else {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .next(".sidebar-submenu")
      .slideDown(200);
    $(this)
      .parent()
      .addClass("active");
  }
});

$("#close-sidebar").click(function() {
  $(".page-wrapper").removeClass("toggled");
});
$("#show-sidebar").click(function() {
  $(".page-wrapper").addClass("toggled");
});




// Indivisual Registration

$(document).ready(function(){
    $("#conditions").click(function(){
      $(".selectuser-section").hide();
      $(".termsCondition").show();
    });
});

$(document).ready(function(){
  $("#registration-form").click(function(){
    $(".selectuser-section").hide();
    $(".termsCondition").hide();
    $(".individuals-registation").show();
  });
  $("#registration-form").click(function(){
    $(".selectuser-section").hide();
    $(".termsCondition").hide();
    $(".legal-practiotion").show();
  });
  $("#registration-form").click(function(){
    $(".selectuser-section").hide();
    $(".termsCondition").hide();
    $(".company-registration").show();
  });
  $("#companyData").click(function(){
    $(".selectuser-section").hide();
    $(".termsCondition").hide();
    $(".company-registration").hide();
    $(".companylegal-data").show();
  });
  $("#legalPractice").click(function(){
    $(".selectuser-section").hide();
    $(".termsCondition").hide();
    $(".individuals-registation").hide();
    $(".legal-practiotion").show();
  });

  // Forgot Password Flow
  $("#forgotPass").click(function(){
    $(".login-form").hide();
    $(".otp-section").show();
  });
  $("#otpVerify").click(function(){
    $(".login-form").hide();
    $(".otp-section").hide();
    $(".reset-password").show();
  });

    // text-editor
    tinymce.init({
      selector: "#textArea",
  });
  // legalpractionar
//hides dropdown content
$(".size_chart").hide();

//unhides first option content
// $("#option1").show();

//listen to dropdown for change
$(".size_select").change(function(){
//rehide content on change
$('.size_chart').hide();
//unhides current item
$('#'+$(this).val()).show();
});

});

// Terms & Conditions
const termsAndConditions = document.querySelector('.terms-and-condition');
const acceptButton = document.querySelector('.accept');

function obCallback(payload) {
  if (payload[0].intersectionRatio === 1) {
    acceptButton.disabled = false;
    observe.unobserve(termsAndConditions.lastElementChild);
  }
}

const observe = new IntersectionObserver(obCallback, {
  root: termsAndConditions,
  threshold: 1,
});

//observe?.observe(termsAndConditions?.lastElementChild);

// Upload File
const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
const customTxt = document.getElementById("custom-text");

customBtn?.addEventListener("click", function() {
  realFileBtn.click();
});

realFileBtn?.addEventListener("change", function() {
  if (realFileBtn.value) {
    customTxt.innerHTML = realFileBtn.value.match(
      /[\/\\]([\w\d\s\.\-\(\)]+)$/
    )[1];
  } else {
    customTxt.innerHTML = "No file chosen, yet.";
  }
});

// Data table


// Tab 
$(document).on('click', 'li', function () {
    $('li').removeClass('active');
    $('ul').toggleClass('expanded');
    $(this).addClass('active');
    var tab_id = $(this).attr('data-tab');
    $('.tab-content').removeClass('current');
    $(this).addClass('current');
    $('#' + tab_id).addClass('current');
});

// News Datatable
$(document).ready(function () {
  dataTable = $('.news-datatable').DataTable({
      dom: "<'row '<'col-sm-12 col-md-6 d-none'l><'col-sm-12 col-md-6'f>>" +
          "<'row mb-4 mt-4'<'col-sm-12'tr>>" +
          "<'row'<'col-sm-12 col-md-5 mb-3 mb-md-0'i><'col-sm-12 col-md-7'p>>",
          "language": {
            "search": "_INPUT_",
            "searchPlaceholder": "ابحث في القائمة",
            "paginate": {
                "previous": "السابق",
                "next": "التالي"
            },
      },
      "order": [], //Initial no order.
      "aaSorting": [],
  });
});

// Profile Data table
$(document).ready(function () {
  dataTable = $('.profile-datatable').DataTable({
      dom: "<'row d-none'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>" +
          "<'row mb-4'<'col-sm-12'tr>>" +
          "<'row d-none'<'col-sm-12 col-md-5 mb-3 mb-md-0'i><'col-sm-12 col-md-7'p>>",
      "language": {
          "paginate": {
              "previous": "السابق",
              "next": "التالي"
          },
      },
      "responsive": "true",
      "order": [], //Initial no order.
      "aaSorting": [],
  });
  // table
  dataTable = $('.news-datatable').DataTable({
    dom: "<'row '<'col-sm-12 col-md-6 d-none'l><'col-sm-12 col-md-6'f>>" +
        "<'row mb-4 mt-4'<'col-sm-12'tr>>" +
        "<'row'<'col-sm-12 col-md-5 mb-3 mb-md-0'i><'col-sm-12 col-md-7'p>>",
    "language": {
        "paginate": {
            "previous": "السابق",
            "next": "التالي"
        },
    },
    "order": [], //Initial no order.
    "aaSorting": [],
});
  //otp section
  document.addEventListener("DOMContentLoaded", function(event) {

    function OTPInput() {
        const inputs = document.querySelectorAll('#otp > *[id]');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener('keydown', function(event) {
                if (event.key === "Backspace") {
                    inputs[i].value = '';
                    if (i !== 0) inputs[i - 1].focus();
                } else {
                    if (i === inputs.length - 1 && inputs[i].value !== '') {
                        return true;
                    } else if (event.keyCode > 47 && event.keyCode < 58) {
                        inputs[i].value = event.key;
                        if (i !== inputs.length - 1) inputs[i + 1].focus();
                        event.preventDefault();
                    } else if (event.keyCode > 64 && event.keyCode < 91) {
                        inputs[i].value = String.fromCharCode(event.keyCode);
                        if (i !== inputs.length - 1) inputs[i + 1].focus();
                        event.preventDefault();
                    }
                }
            });
        }
    }
    OTPInput();
    });
// forgot password
  function passwordCheck(password) {
    if (password.length >= 8)
      strength += 1;
    if (password.match(/(?=.*[0-9])/))
      strength += 1;
    if (password.match(/(?=.*[!,%,&,@,#,$,^,*,?,_,~,<,>,])/))
      strength += 1;
    if (password.match(/(?=.*[a-z])/))
      strength += 1;
  
    displayBar(strength);
  }
  
      function displayBar(strength) {
      $(".password-strength-group").attr('data-strength', strength);
      }
  
      $("#signupInputPassword").keyup(function () {
      strength = 0;
      var password = $(this).val();
      passwordCheck(password);
      });
});
//tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
  })

///add-remove-checkbox
  $(".inner-list .form-check-input").click(function(){
    $(this).closest(".form-check").addClass("checkboxopen")
    $(".form-check").hide();
    $(".downarrow-btn").show();
  })
  
    //inner menu li
    var dropdown = document.getElementsByClassName("dropdown-btn-inner");
    var i;
    
    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    }