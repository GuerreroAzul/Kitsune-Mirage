const Wine = include("engines.wine.engine.object");
const Resource = include("utils.functions.net.resource");
const Optional = Java.type("java.util.Optional");
//const { mkdir, cp } = include("utils.functions.filesystem.files");
//const Regedit = include("engines.wine.plugins.regedit");

class Dinput8 {
    constructor(wine) {
        this.wine = wine;
    }

    go() {
        const wizard = this.wine.wizard();
        const arch = this.wine.architecture();
        //const prefixDirectory = this.wine.prefixDirectory();

        const url = arch === "amd64"
            ? "https://archive.org/download/DLL-POL/DINPUT8/x64/dinput8.dll"
            : "https://archive.org/download/DLL-POL/DINPUT8/x86/dinput8.dll";

        const checksum = arch === "amd64"
            ? "70fd77f1b9464bbef0425b47b2100173"
            : "e03c966f807e633bf445b3b856259221";

        const file = "dinput8.dll";

        const dll = new Resource()
            .wizard(wizard)
            .url(url)
            .checksum(checksum, "md5")
            .name(file)
            .get();

        const systemDirectory = arch === "amd64"
            ? this.wine.system64directory()
            : this.wine.system32directory();

        const destPath = `${systemDirectory}/${file}`;

        if (!fileExists(destPath)) {
            this.wine.copy(dll, `${systemDirectory}/`);
            this.wine.run(`regsvr32.exe /s ${destPath}`);
        }
    }

    static install(container) {
        const wine = new Wine();
        const wizard = SetupWizard(InstallationType.VERBS, "dinput8", Optional.empty());

        wine.prefix(container);
        wine.wizard(wizard);

        new Dinput8(wine).go();

        wizard.close();
    }
}

module.default = Dinput8;