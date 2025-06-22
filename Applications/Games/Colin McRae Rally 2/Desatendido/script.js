const Wine = include("engines.wine.engine.object");
include("engines.wine.verbs");
include("utils.functions.net.resource");
include("engines.wine.quick_script");

var installer = {
    id      : "km_cmr2",
    name    : "Colin McRae Rally 2",
    author  : "GuerreroAzul",
    category: "Games",
    homepage: "https://www.ea.com/ea-studios/codemasters",
    wine: {
        version     : "9.0",
        architecture: "x86",
        os          : "win98"
    },
    mainExecutable: "CMR2.exe",
    installer: function (wizard) {
        var wine = new Wine()
            .wizard(wizard)
            .prefix("cmr2")
            .version("9.0")
            .architecture("x86")
            .setOs("win98");

        wine.install();

        var exe = new Resource()
            .wizard(wizard, "Descargando instalador del juego...")
            .url("https://archive.org/download/Game-POL/Colin%20McRae%20Rally%202/CMR2.exe")
            .checksum("312d7a2ad2feaddc9e3efac8c565597c55e69c991fc1f97446e290b9ba047eb7")
            .name("CMR2.exe")
            .get();

        if (!fileExists(exe)) {
            wizard.error("El archivo del juego no se descargó correctamente.");
            return;
        }

        wine.start(exe);
        wizard.wait("Instala el juego y cierra el instalador cuando hayas terminado.");

        wine.installVerb("d3dx9");
        wine.installVerb("dinput8");

        var option = wizard.menu("¿Deseas instalar el mod oficial WRC?", ["Sí", "No"]);
        if (option === "Sí") {
            var modPath = new Resource()
                .wizard(wizard)
                .url("https://archive.org/download/Game-POL/Colin%20McRae%20Rally%202/CMR2_Official_WRC_Liveries.exe")
                .checksum("df0be1d055e707d41bbabdd0ec302fdfb79cd6e7481cdd87bbfe9ad4897e8b5f")
                .name("CMR2_Official_WRC_Liveries.exe")
                .get();

            wine.run(modPath);
            wizard.wait("Instalando CMR2 Official WRC Liveries...");
        }

        wine.createShortcut("CMR2.exe", "Colin McRae Rally 2");
    }
};

new WineScript().run(installer);