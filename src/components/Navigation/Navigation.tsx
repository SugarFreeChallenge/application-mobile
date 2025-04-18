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

type NavigationProps = {
    activePage: "journal" | "health" | "home" | "tips" | "account";
}

export const Navigation: React.FC<NavigationProps> = ({
    activePage
}) => {
    const { t } = useTranslate();

    return (
        <IonTabBar slot="bottom">
            <IonTabButton
                tab="journal"
                href="/journal"
                className={activePage == "journal" ? "ion-color-primary" : ""}
            >
                <IonIcon
                    aria-hidden="true"
                    icon={activePage == "journal" ? create : createOutline}
                    color={activePage == "journal" ? "primary" : undefined}
                />
                <IonLabel
                    color={activePage == "journal" ? "primary" : undefined}
                >
                    {t("menu.journal")}
                </IonLabel>
            </IonTabButton>

            <IonTabButton
                tab="health"
                href="/health"
                className={activePage == "health" ? "ion-color-primary" : ""}
            >
                <IonIcon
                    aria-hidden="true"
                    icon={activePage == "health" ? heart : heartOutline}
                    color={activePage == "health" ? "primary" : undefined}
                />
                <IonLabel
                    color={activePage == "health" ? "primary" : undefined}
                >
                    {t("menu.health")}
                </IonLabel>
            </IonTabButton>

            <IonTabButton
                tab="home"
                href="/home"
                className={activePage == "home" ? "ion-color-primary" : ""}
            >
                <IonIcon
                    aria-hidden="true"
                    icon={activePage == "home" ? home : homeOutline}
                    color={activePage == "home" ? "primary" : undefined}
                />
                <IonLabel
                    color={activePage == "home" ? "primary" : undefined}
                >
                    {t("menu.home")}
                </IonLabel>
            </IonTabButton>

            <IonTabButton
                tab="tips"
                href="/tips"
                className={activePage == "tips" ? "ion-color-primary" : ""}
            >
                <IonIcon
                    aria-hidden="true"
                    icon={activePage == "tips" ? bulb : bulbOutline}
                    color={activePage == "tips" ? "primary" : undefined}
                />
                <IonLabel
                    color={activePage == "tips" ? "primary" : undefined}
                >
                    {t("menu.tips")}
                </IonLabel>
            </IonTabButton>

            <IonTabButton
                tab="account"
                href="/account"
                className={activePage == "account" ? "ion-color-primary" : ""}
            >
                <IonIcon
                    aria-hidden="true"
                    icon={activePage == "account" ? personCircle : personCircleOutline}
                    color={activePage == "account" ? "primary" : undefined}
                />
                <IonLabel
                    color={activePage == "account" ? "primary" : undefined}
                >
                    {t("menu.account")}
                </IonLabel>
            </IonTabButton>
        </IonTabBar>
    );
}
