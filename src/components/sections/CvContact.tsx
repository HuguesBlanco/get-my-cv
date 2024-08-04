import { Text, View } from '@react-pdf/renderer';
import { CvData } from '../../services/cvServiceTypes';
import CvIcon from '../primitives/CvIcon';
import CvParagraph from '../primitives/CvParagraph';
import CvSection from '../primitives/CvSection';
import { PdfViewElement } from '../types';

type CvContactProps = { cvData: CvData };

function CvContact({ cvData }: CvContactProps): PdfViewElement {
  const leftSpace = '5mm';

  return (
    <CvSection title="Contact">
      <CvParagraph>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              width: leftSpace,
              justifyContent: 'center',
            }}
          >
            <CvIcon icon="envelope" size={10} />
          </View>
          <Text>{cvData.contact.email}</Text>
        </View>
      </CvParagraph>

      <CvParagraph>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              width: leftSpace,
              justifyContent: 'center',
            }}
          >
            <CvIcon icon="phone" size={10} />
          </View>
          <Text>{cvData.contact.phone}</Text>
        </View>
      </CvParagraph>

      <CvParagraph isBottomSpacingEnabled={false}>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                width: leftSpace,
                justifyContent: 'center',
              }}
            >
              <CvIcon icon="locationDot" size={10} />
            </View>
            <Text>{`${cvData.contact.postalAddress.streetNumber} ${cvData.contact.postalAddress.streetName} ${cvData.contact.postalAddress.additionalAddressInfo}`}</Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                width: leftSpace,
              }}
            ></View>
            <Text>{`${cvData.contact.postalAddress.postalCode} ${cvData.contact.postalAddress.city}`}</Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                width: leftSpace,
              }}
            ></View>
            <Text>{cvData.contact.postalAddress.country}</Text>
          </View>
        </View>
      </CvParagraph>
    </CvSection>
  );
}

export default CvContact;
