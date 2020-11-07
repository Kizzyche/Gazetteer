<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="author" content="Kizito Nzeka">
    <title>Gazzetteer</title>
    <link rel="stylesheet" href="libs/css/preloader.css">
    <link rel="stylesheet" href="libs/vendor/bootstrap/bootstrap.min.css">
    <link rel="stylesheet" href="libs/css/style.css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin=""/>
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>
</head>
<body>

    <header id="brandname">Gazzetteer</header>

    <nav>
        <label for="">Country: </label>
        <select name="country" id="country">
            <?php
                $data = file_get_contents("countryBordersGeo.json");
                $data = json_decode($data, true);
                $output = $data['features'];
                asort($output);

                foreach($output as $row){
                    echo "<option value='".$row['properties']['name']."'>".$row['properties']['name']."</option>";
                    
                }
            ?>
        </select>
        <button type="submit" id="btn1" >Search</button>
    </nav>

    <div id="mapid">

    </div>

    <div id="preloader">

    </div>

    <script src="libs/vendor/jquery/jquery-2.2.3.min.js"></script>
    <script src="libs/vendor/bootstrap/bootstrap.min.js"></script>
    <script src="libs/js/script.js"></script>
    <script>
        $(window).on('load', ()=>{
            if($('#preloader').length){
                $('#preloader').delay(100).fadeOut('slow', ()=>{
                    $(this).remove();
                })
            }
        })
    </script>
</body>
</html>