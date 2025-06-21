const OnlineInstallerScript = include("engines.wine.quick_script.online_installer_script");
const Resource = include("utils.functions.net.resource");

new OnlineInstallerScript()
    .name("Colin McRae Rally 2")
    .editor("Codemasters")
    .applicationHomepage("https://www.ea.com/ea-studios/codemasters")
    .author("GuerreroAzul")
    .category("Games")
    .wineVersion("9.0")
    .wineArchitecture("x86")
    .executable("CMR2.EXE")
    .url("https://archive.org/download/Game-POL/Colin%20McRae%20Rally%202/CMR2.exe" )
    .checksum("312d7a2ad2feaddc9e3efac8c565597c55e69c991fc1f97446e290b9ba047eb7")/*
    .postInstall(function (wine, wizard) {
        //Preferencias
        wine.setOs("win98");

        // Recursos
        wine.verb("d3dx9");
        wine.verb("dinput8");

        // Instalar CMR2 Official WRC Liveries
        var option = wizard.menu("¿Deseas instalar el mod oficial WRC?", ["Sí", "No"]);
        if (option === "Sí") {
            var modPath = new Resource()
                .wizard(wizard)
                .url("https://archive.org/download/Game-POL/Colin%20McRae%20Rally%202/CMR2_Official_WRC_Liveries.exe")
                .checksum("59e00d37450e39af3d6e2b7e7cdf2b77", "md5")
                .name("CMR2_Official_WRC_Liveries.exe")
                .get();

            wine.run(modPath);
            wizard.wait("Instalando CMR2 Official WRC Liveries...");    
        }
    })*/;