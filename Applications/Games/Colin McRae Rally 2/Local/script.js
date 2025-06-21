const LocalInstallerScript = include("engines.wine.quick_script.local_installer_script");
const Resource = include("utils.functions.net.resource");

new LocalInstallerScript()
    .name("Colin McRae Rally 2")
    .editor("Codemasters")
    .applicationHomepage("https://www.ea.com/ea-studios/codemasters")
    .author("GuerreroAzul")
    .category("Games")
    .wineVersion("9.0")
    .wineArchitecture("x86")
    .executable("CMR2.EXE")
    .postInstall(function (wine, wizard) {
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
    });