"use client";
import { useEffect, useState } from "react";
import DashboardIndex from "@/components/dashboard/index";
import Wrapper from "@/layouts/Wrapper";
import { useAuth } from "@/context/AuthContext";
import LoginModal from "@/modals/LoginModal";

const DashboardPage = () => {
    const { isAuthenticated, loading } = useAuth();
    const [showLoginModal, setShowLoginModal] = useState(false);

    useEffect(() => {
        // Only show modal after loading is complete and user is not authenticated
        if (!loading && isAuthenticated) {
            // Use Bootstrap modal API to show modal
            const modalElement = document.getElementById('loginModal');
            if (modalElement) {
                const bootstrap = require('bootstrap/dist/js/bootstrap');
                const modal = new bootstrap.Modal(modalElement);
                modal.show();
                setShowLoginModal(true);
            }
        }
    }, [loading, isAuthenticated]);

    const handleLoginSuccess = () => {
        // Hide modal on successful login
        const modalElement = document.getElementById('loginModal');
        if (modalElement) {
            const bootstrap = require('bootstrap/dist/js/bootstrap');
            const modal = bootstrap.Modal.getInstance(modalElement);
            if (modal) {
                modal.hide();
            }
        }
        setShowLoginModal(false);
    };

    const handleLoginClick = () => {
        // Manually open modal when button is clicked
        const modalElement = document.getElementById('loginModal');
        if (modalElement) {
            const bootstrap = require('bootstrap/dist/js/bootstrap');
            const modal = new bootstrap.Modal(modalElement);
            modal.show();
        }
    };

    // Show loading state while checking authentication
    if (loading) {
        return (
            <Wrapper>
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            {!isAuthenticated ? (
                <DashboardIndex />
            ) : (
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                    <div className="text-center">
                        <h3 className="mb-4">Please login to access the dashboard</h3>
                        <button onClick={handleLoginClick} className="btn-two">
                            <span>Login Now</span>
                        </button>
                    </div>
                </div>
            )}
            <LoginModal onLoginSuccess={handleLoginSuccess} />
        </Wrapper>
    );
};

export default DashboardPage;