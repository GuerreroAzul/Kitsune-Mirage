const LocalInstallerScript = include("engines.wine.quick_script.local_installer_script");

new LocalInstallerScript()
    .name("Colin McRae Rally 2")
    .editor("Codemasters")
    .applicationHomepage("https://www.ea.com/ea-studios/codemasters")
    .author("GuerreroAzul")
    .category("Games")
    .wineVersion("9.0")
    .wineArchitecture("x86")
    .wineOs("win98")
    .prefix("CMR2")
    .executable("CMR2.EXE")
    .postInstall(function (wine) {
        // Instalar DirectX 9 (d3dx9)
        wine.verb("d3dx9");

        //Install dinput8
        var dinput8 = new Download()
            .url("https://archive.org/download/DLL-POL/INPUT8/dinput8.dll")
            .checksum("dfe561ad494e657cbc0a9a222ba1a792", "md5")
            .to("dinput8.dll");

        wine.copy(dinput8.path(), "C:/Program Files/Codemasters/Colin McRae Rally 2/");
    });