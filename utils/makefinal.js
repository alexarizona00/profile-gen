
let finalHTML = 
`<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Team's Portfolio</title>
</head>

<body style="background-color:aqua">
  <header>
      <h1 style="text-align:center; border-bottom:3px solid gray">
          Who's on my team?
      </h1>
  </header>

  <section id="cardsection" style="display: flex; flex-direction: row;">
  ${theCards}

  </section>

<script src="../compilehtmlfile.js"></script>
</body>

</html>`