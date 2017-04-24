<html>
    <body>
        <form action="uploadImage.php" method="POST" ENCTYPE="multipart/form-data">
            <center>
            <?php echo('<label>Wybierz obraz dla produktu o ID: '.$_GET['prodId'].'</label>'); ?>
                <br><label>Maxymalnie 4MB format [.jpg]</label><br>
                <br>
                <input type="hidden" name="id" value="<?php echo($_GET['prodId']) ?>">
                <br/><br>
                <input type="file" accept="image/jpeg" name="plik"/>
                <input type="submit" value="Wyślij plik"/>
                <br>
                <br>
                <?php echo('<br><a href="#" onclick="javascript:window.close();opener.window.focus();" >Anuluj</a>') ?>
            </center>
        </form>
    </body>
</html>