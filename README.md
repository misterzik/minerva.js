# Minerva.js 

Minerva is super lightweight jQuery script made by Insanen Solutions back in 2007. After few years got deprecated by jQuery Functionality to make your own Sliders without external coding, But we are bringing it back just for kicks! 


Minerva.js helps you wrap your images into a carousel slider, and gives you the option to add navigation buttons through simple markups.

Minerva.js includes elegant templates to choose from, It is simply, the easiest and faster slider for your to-go projects.

### Installation
1. Download source code and copy from src to your project folder.
2. Make the CSS & JS calls for script dependencies.

```
<link href="src/minerva.min.css" rel="stylesheet" />
<script src="src/minerva.min.js"></script>
```

### Usage
1. Let's create wrapper's and container to keep our coding in place.
2. Let's run slider wrapper around our images. 
3. Let's Populate/Add as many images as we please by using simple HTML. 
4. Let's create the dots ( . . . . . . ) wrapper effect. 
5. Depending on the images you add, You will have to add as many dots as needed.
6. Add Controllers markup. 
6. Happy Coding 


```
<div class="wrapper">
<div class="container">
  <ul id="slider">
    <li><img src="img/amazon.jpg" height="100%" alt="" /></li>
    <li><img src="img/galapagos.jpg" height="100%" alt="" /></li>
    <li><img src="img/guayaquil.jpg" height="100%" alt="" /></li>
    <li><img src="img/montanita.jpg" height="100%" alt="" /></li>
    <li><img src="img/portoviejo.jpg" height="100%" alt="" /></li>
  </ul>

  <ul id="dots">
    <li class="active"></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>

  <div class="" id="controllers">
  <button id="prev">Prev</button>
  <button id="next">Next</button>
  </div>
</div>
</div>

```

### Authors and Contributors
In 2007, Nick Rodriguez (@misterzik), Insanen Solutions (@insanen), and ResolveDesign founded Minerva.JS as a playground script.
In Memory of Minerva V, Rest in peace my beautiful angel, I will never stop expressing your passion for art.
