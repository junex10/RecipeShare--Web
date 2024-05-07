import { IAUTH } from './auth.interface';
import { IPROFILE } from './profile.interface';
import { IRECIPE } from './recipe.interface';
import { IHOME } from './home.interface';

// Patient
import { 
    IPATIENTS,
    IPATIENTCHAT
} from './patient/patient.interface';
import { IPATIENTS_APPOINTMENTS } from './patient/appointments.interface';
import { IDOCTOR_APPOINTMENTS } from './doctor/appointments.interface';

export {
    IAUTH,
    IPROFILE,
    IRECIPE,
    IHOME,

    IPATIENTS,
    IPATIENTS_APPOINTMENTS,
    IPATIENTCHAT,

    IDOCTOR_APPOINTMENTS
}