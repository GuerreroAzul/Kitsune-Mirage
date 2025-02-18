const OnlineInstallerScript = include("engines.wine.quick_script.online_installer_script");

new OnlineInstallerScript()
    .name("7-zip")
    .editor("Igor Pavlov")
    .applicationHomepage("http://www.7-zip.org/")
    .author("GuerreroAzul")
    .url("https://www.7-zip.org/a/7z2409.exe")
    .checksum("2135a90a9f6c3202c32a87b1c5cf805ce294a497")
    .category("Accesories")
    .preInstall(function (wine){
        wine.run(this.url(), ["/S"]);
    })
    .executable("7zFM.exe");
