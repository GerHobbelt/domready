<?php
$testMinified = isset($_GET['minified']);
$timestamp = time();
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en" dir="ltr" id="html">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>DOMReady Test Suite</title>
    <link rel="stylesheet" type="text/css" media="screen" href="qunit/qunit/qunit.css" />
    <script type="text/javascript" src="qunit/qunit/qunit.js"></script>
    <script type="text/javascript" src="../src/domready<?php echo ( $testMinified ) ? '.min' : '' ?>.js?nocache=<?php echo $timestamp ?>"></script>
    <script type="text/javascript" src="unit/domready.js?nocache=<?php echo $timestamp ?>"></script>
</head>
<body id="body">
    <h1 id="qunit-header">
        <a href="/jquery/test/index.php">DOMReady Test Suite</a>
        <label>
            <input type="checkbox" name="minified" <?php echo ( $testMinified ) ? 'checked="checked"' : '' ?> />
            test minified version
        </label>
    </h1>
    <h2 id="qunit-banner"></h2>
    <div id="qunit-testrunner-toolbar"></div>
    <h2 id="qunit-userAgent"></h2>
    <ol id="qunit-tests"></ol>
</body>
</html>