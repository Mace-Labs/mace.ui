const mace = window.mace || {};

mace.ui = (() => {
    const init = () => {
        document.addEventListener('DOMContentLoaded', () => {
            toggleFluidResponsiveTables();
        });

        window.addEventListener('resize', () => {
            toggleFluidResponsiveTables();
        });
    };

    const isWiderThanParent = (element) => {
        return element.offsetWidth > element.parentNode.offsetWidth;
    };

    const toggleFluidResponsiveTables = () => {
        const tables = document.querySelectorAll('.table-responsive-fluid');
        tables.forEach(toggleFluidResponsiveTable);
    };

    const toggleFluidResponsiveTable = (table) => {
        const fluidTableClass = 'table-responsive-fluid-enabled';

        while (table.classList.contains(fluidTableClass)) {
            table.classList.remove(fluidTableClass);
        }

        if (isWiderThanParent(table)) {
            table.classList.add(fluidTableClass);
        }
    };

    return {
        init,
    };
})();
