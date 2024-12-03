import Link from 'next/link';
import Image from 'next/image';
import paypalLogo from '../../../public/images/logo-paypal.svg';
import paypalCode from '../../../public/images/qr-paypal.svg';
import zelleCode from '../../../public/images/qr-zelle.svg';

const imageStyle = {
    padding: '10px 40px',
};

export default function Donate() {
    return (
        <div className="bg-gray-100 min-h-screen py-10">
            <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-md">
                {/* Page Title */}
                <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
                    Ways to Give
                </h1>

                <p className="text-gray-600 mb-4">
                    A Zelle/Venmo or check are the most popular ways to support
                    the Foundation.
                </p>

                {/* Donate Section */}
                <section className="mb-8">
                    {/* online section */}
                    <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                        Online
                    </h3>

                    <div className="flex flex-col md:flex-row justify-center">
                        {/* paypal section */}
                        <div className="flex flex-col items-center">
                            <p className="text-xl">PayPal</p>
                            <Image
                                src={paypalCode}
                                alt="PayPal QR link to donation"
                            />
                            <div className="inline-flex align-items justify-center rounded-full bg-[#FCBB32] font-medium text-neutral-50 transition active:scale-110 ">
                                <Link href="https://www.paypal.com/ncp/payment/SKMFDQZ9GVZS6">
                                    <Image
                                        src={paypalLogo}
                                        style={imageStyle}
                                        alt="PayPal buy button"
                                    />
                                </Link>
                            </div>
                        </div>

                        {/* zelle section */}
                        <div className="flex flex-col items-center">
                            <p className="text-xl">Zelle</p>
                            <Image
                                src={zelleCode}
                                alt="Zelle QR link to donation"
                            />
                        </div>
                    </div>

                    {/* <p className="text-gray-600 text-center">
                        <strong>Zelle:</strong> pisacanomemorial@gmail.com
                        <br />
                        <strong>Venmo/Paypal:</strong>pisacanomemorial@gmail.com
                    </p> */}

                    {/* check section */}
                    <h3 className="text-2xl font-semibold text-gray-700 mb-2 pt-10">
                        Check
                    </h3>
                    <p className="text-gray-600 mb-4">
                        Please make your check payable and mail it to:
                    </p>
                    <address className="text-gray-800 text-center font-medium mb-4">
                        Joseph & Susan Pisacano Memorial Foundation
                        <br />
                        PO Box 20404
                        <br />
                        Huntington Station, NY 117460
                    </address>
                </section>

                {/* Memorial or Honor Gifts Section */}
                <section className="mb-8">
                    <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                        In Memory or Honor of
                    </h3>
                    <p className="text-gray-600 mb-4">
                        Memorial gifts are a meaningful way to recognize or
                        memorialize a friend, relative, or colleague. The
                        Farmingdale College Foundation will notify the honoree
                        or relative regarding all gifts made in this way.
                    </p>
                    <p className="text-gray-600">
                        For details about memorial giving opportunities, please
                        contact Foundation Board member at (631) 767-7760.
                    </p>
                </section>

                {/* IRA Section */}
                <section className="mb-8">
                    <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                        Give from my IRA
                    </h3>
                    <p className="text-gray-600 mb-4">
                        <strong>
                            (You must be at least 70 1/2 years of age to be
                            eligible)
                        </strong>
                    </p>
                    <p className="text-gray-600 mb-4">
                        Contact your bank or broker who holds the IRA and ask
                        them to issue a check payable to <strong>Joseph & Susan Pisacano
                        Memorial Foundation</strong> and reference “Qualified Charitable
                        Distribution” in the memo portion. They should then send
                        the check directly to <strong>Joseph & Susan Pisacano
                        Memorial Foundation</strong> (not to you) at:
                    </p>
                    <address className="text-gray-800 text-center font-medium mb-4">
                        Joseph & Susan Pisacano Memorial Foundation
                        <br />
                        PO Box 20404
                        <br />
                        Huntington Station, NY 117460
                    </address>
                </section>
            </div>
        </div>
    );
}
