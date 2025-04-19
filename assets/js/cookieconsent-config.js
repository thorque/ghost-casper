
/**
 * All config. options available here:
 * https://cookieconsent.orestbida.com/reference/configuration-reference.html
 */
CookieConsent.run({
  disablePageInteraction: true,
  categories: {
      necessary: {
          enabled: true,
          readOnly: true
      }
  },
  guiOptions: {
    consentModal: {
        layout: 'cloud inline',
        position: 'bottom center',
        equalWeightButtons: true,
        flipButtons: false
    },
    preferencesModal: {
        layout: 'box',
        equalWeightButtons: true,
        flipButtons: false
    }
  },
  language: {
      default: 'de',
      translations: {
          de: {
              consentModal: {
                  title: 'Ich verwende Cookies',
                  description: 'Cookies werden nur für die Funktionalität der Website verwendet. Ich verwende keine Cookies, um dein Verhalten zu verfolgen oder deine Daten zu verkaufen.',
                  acceptAllBtn: 'Alle akzeptieren',
                  acceptNecessaryBtn: 'Alle ablehnen',
                  showPreferencesBtn: 'Einstellungen anzeigen',
                  closeIconLabel: 'Schließen'
              },
              preferencesModal: {
                  title: 'Manage cookie preferences',
                  acceptAllBtn: 'Accept all',
                  acceptNecessaryBtn: 'Reject all',
                  savePreferencesBtn: 'Accept current selection',
                  closeIconLabel: 'Close modal',
                  sections: [
                      {
                          title: 'Sagte jemand ... Kekse?',
                          description: 'Ich will alle 😀'
                      },
                      {
                          title: 'Absolut notwendige Cookies',
                          description: 'Diese Cookies sind für die Funktionalität der Website erforderlich und können nicht deaktiviert werden. Sie werden in der Regel nur als Reaktion auf Aktionen gesetzt, die du unternimmst, wie z.B. das Anmelden oder das Ausfüllen von Formularen.',
                          linkedCategory: 'necessary'
                      },{
                          title: 'Weitere Informationen',
                          description: 'Für weitere Informationen zum Datenschutz, rufe die <a href="/impressum-und-datenschutz/">Datenschutzerklärung</a> auf oder <a href="/contact/">kontaktiere mich</a>direkt.'
                      }
                  ]
              }
          }
      }
  }
});