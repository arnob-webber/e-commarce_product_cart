$(".close").click(function () {
  var closeContent = $(this).html();

  if (closeContent == "+") {
    $(".box .shadow").css({ display: "none" });
    $(".box img").animate(
      {
        height: "-=30",
        marginLeft: "15",
        marginTop: "15",
      },
      300,
      function () {
        $(this).clearQueue();
        $(this).stop();
      }
    );
    $(".box").animate(
      {
        width: "+=200",
      },
      500,
      function () {
        $(this).clearQueue();
        $(this).stop();
        $(".box .close").html("&times;");
      }
    );
    $(".box .infos").animate(
      {
        left: "+=192",
      },
      600,
      function () {
        $(this).clearQueue();
        $(this).stop();
      }
    );

    $(".box .buy .cart").click(function () {
      $(this).html("");

      $(this).animate(
        {
          borderRadius: "0",
          top: "0",
          right: "0",
          height: "100%",
          width: "100%",
          padding: "0px",
          cursor: "default",
        },
        250,
        function () {
          $(this).clearQueue();
          $(this).stop();
          $(this).html(
            
            '<img class="check" src="icons8-done-16.png"/>'
          );
        }
      );
    });
  } else {
    $(".box img").animate(
      {
        height: "+=30",
        marginLeft: "0",
        marginTop: "0",
      },
      300,
      function () {
        $(this).clearQueue();
        $(this).stop();
      }
    );

    var contentButton = $(".box .buy .cart").html();
    if (contentButton != "Add to cart") {
      $(".box .buy .cart").html("");
    }

    $(".box .infos").animate(
      {
        left: "-=192",
      },
      600,
      function () {
        $(this).clearQueue();
        $(this).stop();
      }
    );
    $(".box").animate(
      {
        width: "-=200",
      },
      600,
      function () {
        $(this).clearQueue();
        $(this).stop();
        $(".box .close").html("+");
        $(".box .shadow").fadeIn(400);
      }
    );

    $(".box .buy .cart")
      .delay(1000)
      .animate(
        {
          borderRadius: "20",
          top: "10",
          right: "30",
          height: "15px",
          width: "80px",
          padding: "10px 40px 10px 40px",
          cursor: "default",
        },
        1,
        function () {
          $(this).clearQueue();
          $(this).stop();
          $(this).html("Add to cart");
        }
      );
  }
});
