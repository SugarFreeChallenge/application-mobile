import { IonIcon, IonLabel, IonTabBar, IonTabButton } from "@ionic/react";
import { useTranslate } from "@tolgee/react";
import {
    create,
    heart,
    home,
    bulb,
    personCircle,
    createOutline,
    heartOutline,
    homeOutline,
    bulbOutline,
    personCircleOutline,
} from 'ionicons/icons';
import { useState } from "react";

type NavigationProps = {
    activePage?: "home"|"journal"|"health"|"tips"|"account";
}

export const Navigation: React.FC<NavigationProps> = ({
    activePage = "home",
}) => {
    const { t } = useTranslate();

    const [currentPage, setCurrentPage] = useState<string>(activePage ?? "home");

    return (
        <IonTabBar slot="bottom">
            <IonTabButton
                tab="journal"
                href="/journal"
                className={currentPage == "journal" ? "ion-color-primary" : ""}
                onClick={() => setCurrentPage("journal")}
            >
                <IonIcon
                    aria-hidden="true"
                    icon={currentPage == "journal" ? create : createOutline}
                    color={currentPage == "journal" ? "primary" : undefined}
                />
                <IonLabel
                    color={currentPage == "journal" ? "primary" : undefined}
                >
                    {t("menu.journal")}
                </IonLabel>
            </IonTabButton>

            <IonTabButton
                tab="health"
                href="/health"
                className={currentPage == "health" ? "ion-color-primary" : ""}
                onClick={() => setCurrentPage("health")}
            >
                <IonIcon
                    aria-hidden="true"
                    icon={currentPage == "health" ? heart : heartOutline}
                    color={currentPage == "health" ? "primary" : undefined}
                />
                <IonLabel
                    color={currentPage == "health" ? "primary" : undefined}
                >
                    {t("menu.health")}
                </IonLabel>
            </IonTabButton>

            <IonTabButton
                tab="home"
                href="/home"
                className={currentPage == "home" ? "ion-color-primary" : ""}
                onClick={() => setCurrentPage("home")}
            >
                <IonIcon
                    aria-hidden="true"
                    icon={currentPage == "home" ? home : homeOutline}
                    color={currentPage == "home" ? "primary" : undefined}
                />
                <IonLabel
                    color={currentPage == "home" ? "primary" : undefined}
                >
                    {t("menu.home")}
                </IonLabel>
            </IonTabButton>

            <IonTabButton
                tab="tips"
                href="/tips"
                className={currentPage == "tips" ? "ion-color-primary" : ""}
                onClick={() => setCurrentPage("tips")}
            >
                <IonIcon
                    aria-hidden="true"
                    icon={currentPage == "tips" ? bulb : bulbOutline}
                    color={currentPage == "tips" ? "primary" : undefined}
                />
                <IonLabel
                    color={currentPage == "tips" ? "primary" : undefined}
                >
                    {t("menu.tips")}
                </IonLabel>
            </IonTabButton>

            <IonTabButton
                tab="account"
                href="/account"
                className={currentPage == "account" ? "ion-color-primary" : ""}
                onClick={() => setCurrentPage("account")}
            >
                <IonIcon
                    aria-hidden="true"
                    icon={currentPage == "account" ? personCircle : personCircleOutline}
                    color={currentPage == "account" ? "primary" : undefined}
                />
                <IonLabel
                    color={currentPage == "account" ? "primary" : undefined}
                >
                    {t("menu.account")}
                </IonLabel>
            </IonTabButton>
        </IonTabBar>
    );
}
