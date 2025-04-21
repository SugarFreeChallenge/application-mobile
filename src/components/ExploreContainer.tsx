import { IonButton } from '@ionic/react';
import { useTranslate } from '@tolgee/react';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const { t } = useTranslate();

  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>

      <IonButton
        expand="full"
        fill="outline"
        color="primary"
      >
        {t('menu.account')}
      </IonButton>
    </div>
  );
};

export default ExploreContainer;
