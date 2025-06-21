const OnlineInstallerScript = include("engines.wine.quick_script.online_installer_script");

new OnlineInstallerScript()
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
    .url("https://archive.org/download/Game-POL/Colin%20McRae%20Rally%202/CMR2.exe" )
    .checksum("39c14354ccc98e6878adc6e98968e06d", "md5")
    .postInstall(function (wine, wizard) {
        // Install DirectX 9 (d3dx9)
        wine.verb("d3dx9");

        //Install dinput8
        var dinput8 = new Download()
            .url("https://archive.org/download/DLL-POL/INPUT8/dinput8.dll")
            .checksum("dfe561ad494e657cbc0a9a222ba1a792", "md5")
            .to("dinput8.dll");

        wine.copy(dinput8.path(), "C:/Program Files/Codemasters/Colin McRae Rally 2/");

        // Install CMR2 Official WRC Liveries
        var ModInstall = new Download()
                .wizard(wizard, "Download CMR2 Official WRC Liveries...")
                .url("https://archive.org/download/Game-POL/Colin%20McRae%20Rally%202/CMR2_Official_WRC_Liveries.exe")
                .checksum("59e00d37450e39af3d6e2b7e7cdf2b77", "md5")
                .to("CMR2_Official_WRC_Liveries.exe");

            wine.run(ModInstall.path());
            wizard.wait("Install CMR2 Official WRC Liveries...");
    });