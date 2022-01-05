import Card from "../Cards/Card";
import CardLinkButton from "../Cards/CardLinkButton";
import {t} from "i18next";
import React from "react";

export default () => {
    return (
        <div onClick={() => open = false} className="relative">
            <button onClick={() => open = !open} className="dropdown-button">
                <span>Dropdown</span>
                <IconMdiChevronDown
                    className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"/>
            </button>

            <Card>
                <CardLinkButton to="/">{t("Link 1")}</CardLinkButton>
                <CardLinkButton to="/">{t("Link 2")}</CardLinkButton>
                <CardLinkButton to="/">{t("Link 3")}</CardLinkButton>
            </Card>
        </div>
    )
}
